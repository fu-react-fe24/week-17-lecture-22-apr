import Form from "../components/Form/Form"
import Nav from "../components/Nav/Nav"

function FormPage() {
  return (
    <section className="page">
      <Nav page="form" />
        <h1>FormPage</h1>
        <Form />
    </section>
  )
}

export default FormPage
