import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'guide' | 'comparison' | 'news' | 'story';
  date: string;
  readTime: string;
}

const posts: BlogPost[] = [
  // Comparison Articles
  {
    slug: 'consumershield-vs-legalzoom',
    title: 'ConsumerShield vs LegalZoom: Which Is Better for Debt Collection Issues?',
    excerpt: 'LegalZoom sells you forms. We connect you with attorneys who sue debt collectors for free. Here\'s why that matters.',
    category: 'comparison',
    date: '2025-02-09',
    readTime: '5 min',
  },
  {
    slug: 'consumershield-vs-legalmatch',
    title: 'ConsumerShield vs LegalMatch: Free Consultations vs Paid Leads',
    excerpt: 'LegalMatch charges attorneys $200+ per lead. We focus on consumer protection cases with fee-shifting, so you pay nothing.',
    category: 'comparison',
    date: '2025-02-09',
    readTime: '4 min',
  },
  {
    slug: 'consumershield-vs-avvo',
    title: 'ConsumerShield vs Avvo: Specialized vs General Legal Help',
    excerpt: 'Avvo covers everything from divorce to DUI. We specialize in one thing: fighting debt collectors and credit bureaus.',
    category: 'comparison',
    date: '2025-02-09',
    readTime: '4 min',
  },
  // Educational Guides
  {
    slug: 'debt-collector-called-my-workplace',
    title: 'A Debt Collector Called My Workplace - Is That Legal?',
    excerpt: 'Short answer: usually no. Here\'s exactly what the law says and what you can do about it.',
    category: 'guide',
    date: '2025-02-09',
    readTime: '6 min',
  },
  {
    slug: 'debt-collector-threats-illegal',
    title: '7 Debt Collector Threats That Are Actually Illegal',
    excerpt: 'They threatened to arrest you? Sue you? Tell your family? Here\'s what they can\'t legally do.',
    category: 'guide',
    date: '2025-02-09',
    readTime: '8 min',
  },
  {
    slug: 'how-to-sue-debt-collector',
    title: 'How to Sue a Debt Collector (And Why It\'s Free)',
    excerpt: 'Most people don\'t know: when you sue a debt collector and win, THEY pay your attorney fees. Here\'s how it works.',
    category: 'guide',
    date: '2025-02-09',
    readTime: '7 min',
  },
  {
    slug: 'stop-robocalls-tcpa',
    title: 'How to Stop Robocalls and Get Paid $500-$1,500 Per Call',
    excerpt: 'The TCPA lets you sue for $500-$1,500 per illegal robocall. Yes, really. Here\'s how.',
    category: 'guide',
    date: '2025-02-09',
    readTime: '6 min',
  },
  {
    slug: 'credit-report-errors-fcra',
    title: 'Credit Report Errors: How to Fix Them and Sue If They Don\'t',
    excerpt: '1 in 5 credit reports has errors. The FCRA gives you the right to dispute them - and sue if the bureaus ignore you.',
    category: 'guide',
    date: '2025-02-09',
    readTime: '9 min',
  },
  {
    slug: 'zombie-debt-collectors',
    title: 'Zombie Debt: When Collectors Come After Old Debts They Can\'t Sue For',
    excerpt: 'That 10-year-old debt? They can\'t sue you for it. But they\'ll still try to collect. Here\'s how to fight back.',
    category: 'guide',
    date: '2025-02-09',
    readTime: '7 min',
  },
  {
    slug: 'debt-validation-letter-guide',
    title: 'The Debt Validation Letter: Your First Weapon Against Collectors',
    excerpt: 'They have 30 days to prove you owe the debt. If they can\'t, they have to stop collecting. Here\'s the letter that triggers it.',
    category: 'guide',
    date: '2025-02-09',
    readTime: '5 min',
  },
  // Stories
  {
    slug: 'i-sued-midland-credit-won',
    title: 'I Sued Midland Credit Management and Won $3,500',
    excerpt: 'They called my cell phone 47 times after I told them to stop. An attorney took my case for free. Here\'s what happened.',
    category: 'story',
    date: '2025-02-09',
    readTime: '6 min',
  },
  {
    slug: 'equifax-deleted-collections-account',
    title: 'How I Got Equifax to Delete a $12,000 Collections Account',
    excerpt: 'The debt wasn\'t mine. It took 3 dispute letters and a lawsuit threat, but it\'s gone. Here\'s exactly what I did.',
    category: 'story',
    date: '2025-02-09',
    readTime: '8 min',
  },
];

const categoryLabels = {
  guide: 'Guide',
  comparison: 'Comparison',
  news: 'News',
  story: 'Success Story',
};

const categoryColors = {
  guide: 'bg-blue-100 text-blue-800',
  comparison: 'bg-purple-100 text-purple-800',
  news: 'bg-green-100 text-green-800',
  story: 'bg-orange-100 text-orange-800',
};

export default function BlogPage() {
  const comparisons = posts.filter((p) => p.category === 'comparison');
  const guides = posts.filter((p) => p.category === 'guide');
  const stories = posts.filter((p) => p.category === 'story');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Consumer Rights Blog
          </h1>
          <p className="text-xl text-gray-300">
            Know your rights. Fight back. Win.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Comparison Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm mr-3">VS</span>
            How We Compare
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {comparisons.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
              >
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[post.category]}`}>
                  {categoryLabels[post.category]}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <span className="text-blue-600 text-sm font-medium">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Guides */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Know Your Rights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 flex"
              >
                <div className="flex-1">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[post.category]}`}>
                    {categoryLabels[post.category]}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {stories.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-orange-100"
              >
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[post.category]}`}>
                  {categoryLabels[post.category]}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <span className="text-orange-600 text-sm font-medium">
                  Read the full story →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Think You Have a Case?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our free violation checker identifies potential FDCPA, TCPA, and FCRA violations in under 2 minutes.
            If you have a case, we&apos;ll connect you with an attorney at no cost.
          </p>
          <Link
            href="/check"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            Check Your Rights Now
          </Link>
        </section>
      </div>
    </div>
  );
}
