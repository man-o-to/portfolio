import { ContentTabs } from '@/components/content/ContentTabs'
import { IdCard } from '@/components/id-card/IdCard'
import { PortfolioShell } from '@/components/layout/PortfolioShell'

function App() {
  return <PortfolioShell idCard={<IdCard />} content={<ContentTabs />} />
}

export default App
