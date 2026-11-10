# 1Hive Website

This is the main website for [1Hive](https://1hive.org), built using [Quartz v4](https://quartz.jzhao.xyz/), a powerful tool for publishing a hypertext notebook as a website.

## Contributing

We welcome contributions to the 1Hive website! Read [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow and review standards. Here's how you can help:

1. **Fork** the repository
2. Create a new branch for your changes
3. Make your changes
4. Submit a Pull Request (PR)

### Guidelines for Contributions

- Ensure your changes align with 1Hive's mission and values
- Follow the existing style and formatting conventions
- Keep content clear, concise, and well-organized
- Test your changes locally before submitting a PR
- Include a clear description of your changes in the PR

### Local Development

Use Node.js 22 or later and npm 10.9.2 or later. Run `npm ci`, then `npm run serve` for a local preview. Before requesting review, run:

```sh
npm run check
npm test
npm run build
npm run check:site
```

This website is built using Quartz v4, which features:

- Easy content management with Markdown
- Fast and responsive design
- Built-in search functionality
- Automatic link generation
- Graph visualization of content

For more information about Quartz and its features, visit the [official documentation](https://quartz.jzhao.xyz/).

## Participate with your agent

Bring the personal agent you already use. Start with [AGENTS.md](AGENTS.md), the [participation guide](content/Participate%20with%20your%20agent.md), and the [skills library](skills/README.md). These plain Markdown workflows help with orientation, wiki improvements, and source-linked public-activity summaries, without a shared model account or required provider.

The build publishes the reviewed agent documents directly at `/AGENTS.md`, `/CONTRIBUTING.md`, and `/skills/README.md`, using one source of truth. The human-facing page is linked from the custom homepage and wiki. Automatic notifications, reputation systems, and agent-specific rewards are future possibilities, not services implemented by this repository.

## Community

Join our community to learn more and get involved:

- [Discord](https://discord.gg/1hive)
- [Forum](https://forum.1hive.org/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
