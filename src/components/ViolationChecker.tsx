'use client';

import { useState } from 'react';
import {
  fdcpaQuestions,
  tcpaQuestions,
  fcraQuestions,
  calculateScore,
  estimateDamages,
  usStates,
  type Question,
} from '@/lib/questionnaire-data';

type ViolationType = 'fdcpa' | 'tcpa' | 'fcra' | 'both' | null;
type Step = 'type' | 'questions' | 'results' | 'contact' | 'confirmation';

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  state: string;
  collectorName: string;
  description: string;
  bestTime: string;
}

export default function ViolationChecker() {
  const [step, setStep] = useState<Step>('type');
  const [violationType, setViolationType] = useState<ViolationType>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: '',
    phone: '',
    state: '',
    collectorName: '',
    description: '',
    bestTime: 'morning',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getQuestions = (): Question[] => {
    if (violationType === 'fdcpa') return fdcpaQuestions;
    if (violationType === 'tcpa') return tcpaQuestions;
    if (violationType === 'fcra') return fcraQuestions;
    if (violationType === 'both') return [...fdcpaQuestions, ...tcpaQuestions];
    return [];
  };

  const questions = getQuestions();
  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  const handleTypeSelect = (type: ViolationType) => {
    setViolationType(type);
    setStep('questions');
  };

  const handleAnswer = (questionId: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setStep('results');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      setStep('type');
      setViolationType(null);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { damages, overallQuality, violations } = getResults();
      const fdcpaResult = violationType === 'fdcpa' || violationType === 'both'
        ? calculateScore(answers, fdcpaQuestions)
        : null;
      const tcpaResult = violationType === 'tcpa' || violationType === 'both'
        ? calculateScore(answers, tcpaQuestions)
        : null;
      const fcraResult = violationType === 'fcra'
        ? calculateScore(answers, fcraQuestions)
        : null;

      const totalScore = (fdcpaResult?.score || 0) + (tcpaResult?.score || 0) + (fcraResult?.score || 0);

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          state: contactInfo.state,
          violationType,
          collectorName: contactInfo.collectorName,
          description: contactInfo.description,
          bestTime: contactInfo.bestTime,
          score: totalScore,
          quality: overallQuality,
          violations,
          hasDocumentation: answers['documentation'] &&
            Array.isArray(answers['documentation']) &&
            !answers['documentation'].includes('nothing'),
          timeline: answers['timeline'],
          answers,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit lead');
      }

      setStep('confirmation');
    } catch (error) {
      console.error('Error submitting lead:', error);
      // Still show confirmation - we don't want to lose the lead
      // In production, you might want to show an error and retry
      setStep('confirmation');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    if (!currentQuestion) return false;
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === 'multiple') {
      return Array.isArray(answer) && answer.length > 0;
    }
    return !!answer;
  };

  const getResults = () => {
    const fdcpaResult = violationType === 'fdcpa' || violationType === 'both'
      ? calculateScore(answers, fdcpaQuestions)
      : null;
    const tcpaResult = violationType === 'tcpa' || violationType === 'both'
      ? calculateScore(answers, tcpaQuestions)
      : null;
    const fcraResult = violationType === 'fcra'
      ? calculateScore(answers, fcraQuestions)
      : null;

    const damages = estimateDamages(violationType!, answers);

    let overallQuality: 'strong' | 'good' | 'weak' | 'disqualified' = 'weak';
    if (fdcpaResult?.quality === 'disqualified' || tcpaResult?.quality === 'disqualified' || fcraResult?.quality === 'disqualified') {
      overallQuality = 'disqualified';
    } else if (fdcpaResult?.quality === 'strong' || tcpaResult?.quality === 'strong' || fcraResult?.quality === 'strong') {
      overallQuality = 'strong';
    } else if (fdcpaResult?.quality === 'good' || tcpaResult?.quality === 'good' || fcraResult?.quality === 'good') {
      overallQuality = 'good';
    }

    const violations = [
      ...(fdcpaResult?.violations || []),
      ...(fcraResult?.violations || []),
    ];

    return { fdcpaResult, tcpaResult, fcraResult, damages, overallQuality, violations };
  };

  // Type Selection Step
  if (step === 'type') {
    return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What&apos;s happening to you?</h2>
        <p className="text-gray-600 mb-8">Select the option that best describes your situation.</p>

        <div className="space-y-4">
          <button
            onClick={() => handleTypeSelect('fdcpa')}
            className="w-full p-6 bg-white border-2 border-gray-200 rounded-xl text-left hover:border-blue-500 hover:bg-blue-50 transition-colors group"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">Debt Collector Harassment</h3>
                <p className="text-gray-600 mt-1">
                  A debt collector is calling, threatening, lying, or treating me unfairly
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleTypeSelect('tcpa')}
            className="w-full p-6 bg-white border-2 border-gray-200 rounded-xl text-left hover:border-blue-500 hover:bg-blue-50 transition-colors group"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">Robocalls or Spam Texts</h3>
                <p className="text-gray-600 mt-1">
                  I&apos;m getting unwanted automated calls or text messages
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleTypeSelect('fcra')}
            className="w-full p-6 bg-white border-2 border-gray-200 rounded-xl text-left hover:border-purple-500 hover:bg-purple-50 transition-colors group"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">Credit Report Errors</h3>
                <p className="text-gray-600 mt-1">
                  There are errors on my credit report that the bureaus won&apos;t fix
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleTypeSelect('both')}
            className="w-full p-6 bg-white border-2 border-gray-200 rounded-xl text-left hover:border-blue-500 hover:bg-blue-50 transition-colors group"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">Debt Collectors + Robocalls</h3>
                <p className="text-gray-600 mt-1">
                  I&apos;m dealing with both debt collection issues and robocalls/texts
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }

  // Questions Step
  if (step === 'questions' && currentQuestion) {
    return (
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.text}</h2>

        <div className="space-y-3 mb-8">
          {currentQuestion.type === 'single' ? (
            currentQuestion.options.map((option) => (
              <label
                key={option.value}
                className={`flex items-center p-4 bg-white border-2 rounded-xl cursor-pointer transition-colors ${
                  answers[currentQuestion.id] === option.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option.value}
                  checked={answers[currentQuestion.id] === option.value}
                  onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                  className="w-5 h-5 text-blue-600"
                />
                <span className="ml-3 text-gray-900">{option.label}</span>
              </label>
            ))
          ) : (
            currentQuestion.options.map((option) => {
              const currentAnswers = (answers[currentQuestion.id] as string[]) || [];
              const isChecked = currentAnswers.includes(option.value);
              return (
                <label
                  key={option.value}
                  className={`flex items-center p-4 bg-white border-2 rounded-xl cursor-pointer transition-colors ${
                    isChecked ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={isChecked}
                    onChange={(e) => {
                      const newAnswers = e.target.checked
                        ? [...currentAnswers, option.value]
                        : currentAnswers.filter((v) => v !== option.value);
                      handleAnswer(currentQuestion.id, newAnswers);
                    }}
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                  <span className="ml-3 text-gray-900">{option.label}</span>
                </label>
              );
            })
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleBack}
            className="px-6 py-3 text-gray-700 font-medium hover:text-gray-900"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Continue' : 'See Results'}
          </button>
        </div>
      </div>
    );
  }

  // Results Step
  if (step === 'results') {
    const { damages, overallQuality, violations } = getResults();

    if (overallQuality === 'disqualified') {
      return (
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Unfortunately, You May Not Have a Case
          </h2>
          <p className="text-gray-600 mb-8">
            Based on your answers, your situation may not qualify for legal action under the FDCPA or TCPA.
            This could be because the violations occurred too long ago, or the caller was the original creditor
            (not covered by FDCPA).
          </p>

          <div className="bg-blue-50 rounded-xl p-6 text-left mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">You Can Still Protect Yourself:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Send a debt validation letter to verify the debt
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Send a cease communication letter to stop calls
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                File a complaint with the CFPB or FTC
              </li>
            </ul>
          </div>

          <a
            href="/templates"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Free Templates
          </a>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
            overallQuality === 'strong' ? 'bg-green-100' : 'bg-yellow-100'
          }`}>
            <svg className={`w-8 h-8 ${overallQuality === 'strong' ? 'text-green-600' : 'text-yellow-600'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {overallQuality === 'strong' ? 'You Likely Have a Strong Case!' : 'You May Have a Case'}
          </h2>
          <p className="text-gray-600 mt-2">
            Based on your answers, your rights may have been violated.
          </p>
        </div>

        {/* Estimated Damages */}
        <div className="bg-green-50 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Estimated Case Value</h3>
          <div className="text-3xl font-bold text-green-600">
            ${damages.min.toLocaleString()} - ${damages.max.toLocaleString()}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            This is an estimate based on statutory damages. Actual recovery may vary.
          </p>
        </div>

        {/* Violations Found */}
        {violations.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Potential Violations Identified</h3>
            <ul className="space-y-2">
              {violations.map((violation, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{violation}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* What Happens Next */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">What Happens Next?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-medium">1</span>
              <span>Share your contact info so we can connect you with an attorney</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-medium">2</span>
              <span>An attorney will contact you within 24 hours to discuss your case</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-medium">3</span>
              <span>If they take your case, you pay $0 out of pocket</span>
            </li>
          </ul>
        </div>

        <button
          onClick={() => setStep('contact')}
          className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Connect Me With an Attorney (Free)
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          No obligation. Attorneys work on contingency &ndash; you only pay if you win.
        </p>
      </div>
    );
  }

  // Contact Form Step
  if (step === 'contact') {
    return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Almost Done!</h2>
        <p className="text-gray-600 mb-8">
          Enter your contact information so an attorney can reach you about your case.
        </p>

        <form onSubmit={handleContactSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={contactInfo.name}
                onChange={(e) => setContactInfo((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={contactInfo.phone}
                onChange={(e) => setContactInfo((prev) => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={contactInfo.email}
                onChange={(e) => setContactInfo((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State *
              </label>
              <select
                id="state"
                required
                value={contactInfo.state}
                onChange={(e) => setContactInfo((prev) => ({ ...prev, state: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select your state</option>
                {usStates.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="collectorName" className="block text-sm font-medium text-gray-700 mb-1">
              Collector/Company Name (if known)
            </label>
            <input
              type="text"
              id="collectorName"
              value={contactInfo.collectorName}
              onChange={(e) => setContactInfo((prev) => ({ ...prev, collectorName: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="ABC Collections"
            />
          </div>

          <div>
            <label htmlFor="bestTime" className="block text-sm font-medium text-gray-700 mb-1">
              Best Time to Call
            </label>
            <select
              id="bestTime"
              value={contactInfo.bestTime}
              onChange={(e) => setContactInfo((prev) => ({ ...prev, bestTime: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="morning">Morning (9am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 5pm)</option>
              <option value="evening">Evening (5pm - 8pm)</option>
              <option value="anytime">Anytime</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Brief Description (Optional)
            </label>
            <textarea
              id="description"
              rows={3}
              value={contactInfo.description}
              onChange={(e) => setContactInfo((prev) => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us a bit more about what happened..."
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              required
              className="mt-1 w-4 h-4 text-blue-600 rounded"
            />
            <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
              I agree to be contacted by an attorney about my case. I understand this is a free service
              and I am under no obligation. View our{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep('results')}
              className="px-6 py-3 text-gray-700 font-medium hover:text-gray-900"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Confirmation Step
  if (step === 'confirmation') {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Your Request Has Been Submitted!
        </h2>
        <p className="text-gray-600 mb-8">
          An attorney will contact you within 24 hours to discuss your case.
          Check your email for a confirmation.
        </p>

        <div className="bg-blue-50 rounded-xl p-6 text-left mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">What to Expect:</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              The attorney will review your case for free
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              They&apos;ll explain your options and next steps
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              If they take your case, you pay nothing upfront
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              You&apos;re under no obligation to proceed
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">While You Wait:</h3>
          <p className="text-gray-600 mb-4">
            Download our free templates to document future violations and protect yourself.
          </p>
          <a
            href="/templates"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
          >
            Get Free Templates
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <a
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Home
        </a>
      </div>
    );
  }

  return null;
}
