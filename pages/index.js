import Layout from "../component/Layout"
import Welcome from "../component/Welcome"
import Feature from "../component/Feature"
import Opinion from "../component/Opinion"
import MoreInformation from "../component/MoreInformation"

export default function Home() {
  return (
    <Layout pageTitle='HireJob'>
      <Welcome />
      <Feature />
      <Opinion />
      <MoreInformation />
    </Layout>
  )
}
