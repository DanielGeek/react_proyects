# 69-nodebase - Workflow Automation Platform

A modern, full-stack workflow automation platform built with Next.js, React Flow, and Prisma. This application allows users to create, manage, and execute workflows through an intuitive drag-and-drop interface.

## 🚀 Features

- **Visual Workflow Builder**: Create complex workflows using a drag-and-drop interface
- **Node-based Architecture**: Build with various node types (triggers, actions, conditions)
- **Real-time Execution**: Monitor workflow execution with status indicators
- **HTTP Request Node**: Make API calls with configurable methods and request bodies
- **Manual Triggers**: Start workflows on-demand
- **Responsive UI**: Built with modern React and Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **State Management**: Jotai
- **Styling**: Tailwind CSS with shadcn/ui components
- **Data Fetching**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation
- **Flow Builder**: React Flow (XYFlow)
- **Icons**: Lucide Icons

### Backend
- **Runtime**: Node.js
- **API**: tRPC
- **Database**: Prisma ORM with PostgreSQL
- **Authentication**: NextAuth.js
- **Real-time**: WebSockets (via Inngest)

### Development Tools
- **Type Safety**: TypeScript
- **Code Formatting**: Biome
- **Package Manager**: pnpm
- **Deployment**: Vercel

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/             # Reusable UI components
│   ├── ui/                 # shadcn/ui components
│   └── workflow-node/       # Workflow node components
├── features/               # Feature-based modules
│   ├── editor/             # Workflow editor
│   ├── executions/         # Workflow execution logic
│   └── triggers/           # Trigger implementations
├── lib/                    # Shared utilities
├── prisma/                 # Database schema and migrations
└── trpc/                   # tRPC routers and procedures
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- PostgreSQL

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/69-nodebase.git
   cd 69-nodebase
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   # Update the values in .env.local
   ```

4. Set up the database
   ```bash
   pnpm prisma migrate dev
   ```

5. Run the development server
   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧪 Testing

Run the test suite:
```bash
pnpm test
```

## 🧹 Linting & Formatting

```bash
# Check for errors
pnpm lint

# Format code
pnpm format
```

## 🚀 Deployment

Deploy your own instance on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2F69-nodebase)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## 📄 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Flow Documentation](https://reactflow.dev/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Prisma Documentation](https://www.prisma.io/docs)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
