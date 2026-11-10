import { generateProposals, readProposals } from "./proposals"

try {
  if (process.argv.includes("--check")) {
    const proposals = await readProposals()
    console.log(`Validated ${proposals.length} public proposal source(s).`)
  } else {
    const pages = await generateProposals()
    console.log(`Generated proposal index and ${pages.length - 1} wiki proposal page(s).`)
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
}
