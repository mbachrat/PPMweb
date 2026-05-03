export const blogPosts = [
  {
    slug: 'condo-board-budget-planning',
    title: 'Condo Board Budget Planning: What to Review Before Year-End',
    date: '2026-05-02',
    displayDate: 'May 2, 2026',
    author: 'May Moses',
    category: 'Board Resources',
    readTime: '4 min read',
    excerpt:
      'A practical checklist for reviewing operating budgets, reserve contributions, service contracts, and community priorities before the next fiscal year.',
    sections: [
      {
        heading: 'Start with the current-year actuals',
        body: [
          'Before adjusting next year\'s budget, compare year-to-date actuals against the approved budget. The most useful review separates recurring operating costs from one-time expenses so the board can see what is truly changing.',
          'Pay close attention to utilities, insurance, cleaning, security, landscaping, snow removal, and repair categories. These are often where small assumptions create meaningful changes over a full year.',
        ],
      },
      {
        heading: 'Review contracts before renewal dates',
        body: [
          'Budget season is also the right time to confirm which vendor agreements renew soon, which services need updated scopes, and which contracts should be tendered before pricing is locked in.',
          'Boards should ask whether the current scope still matches the property\'s needs, whether service levels are documented clearly, and whether recent performance issues should affect renewal decisions.',
        ],
      },
      {
        heading: 'Connect the operating budget to the reserve plan',
        body: [
          'Operating decisions should not be made in isolation from capital planning. Upcoming reserve projects can affect staffing, communications, temporary services, and insurance considerations.',
          'A clear budget package should help directors understand what is routine, what is project-related, and what needs a board decision before notices are issued to owners.',
        ],
      },
    ],
  },
  {
    slug: 'better-board-meeting-packages',
    title: 'What Makes a Better Condominium Board Meeting Package',
    date: '2026-04-18',
    displayDate: 'April 18, 2026',
    author: 'May Moses',
    category: 'Governance',
    readTime: '3 min read',
    excerpt:
      'A stronger meeting package helps directors focus on decisions instead of hunting through attachments, emails, and disconnected updates.',
    sections: [
      {
        heading: 'Lead with decisions',
        body: [
          'A board package should make the required decisions obvious. Each decision item should include the recommendation, relevant context, cost impact, and any deadline the board needs to consider.',
          'Information-only updates still matter, but they should not bury motions, approvals, or time-sensitive issues.',
        ],
      },
      {
        heading: 'Keep action items visible',
        body: [
          'A simple action register improves accountability between meetings. It should identify the owner, next step, target date, and current status for each open item.',
          'When action items are tracked consistently, recurring issues become easier to spot and fewer decisions are reopened unnecessarily.',
        ],
      },
      {
        heading: 'Use attachments with intent',
        body: [
          'Attachments should support the decision in front of the board. Large document sets are easier to review when the package explains why each attachment is included and what directors should look for.',
        ],
      },
    ],
  },
  {
    slug: 'resident-communication-during-maintenance',
    title: 'Resident Communication During Building Maintenance',
    date: '2026-03-27',
    displayDate: 'March 27, 2026',
    author: 'May Moses',
    category: 'Community Operations',
    readTime: '5 min read',
    excerpt:
      'Clear maintenance notices reduce confusion, improve access, and help residents understand how work will affect their day.',
    sections: [
      {
        heading: 'Explain the impact, not just the work',
        body: [
          'Residents need to know what is happening, but they also need to know how it affects them. A useful notice states the location, dates, expected noise, service interruptions, access requirements, and contact path for questions.',
          'The best notices are direct, specific, and written in plain language. They avoid technical detail unless it helps residents prepare.',
        ],
      },
      {
        heading: 'Send reminders at the right moments',
        body: [
          'For disruptive work, one notice is rarely enough. A first notice gives residents time to plan, a reminder keeps the work visible, and a same-day update helps prevent missed access or avoidable calls.',
        ],
      },
      {
        heading: 'Close the loop after completion',
        body: [
          'When work is complete, a short follow-up can confirm the outcome, thank residents for cooperation, and identify any next steps. This helps build trust and reduces uncertainty around recurring projects.',
        ],
      },
    ],
  },
];

export const getBlogPostBySlug = slug =>
  blogPosts.find(post => post.slug === slug);
