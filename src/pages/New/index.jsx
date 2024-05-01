import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título" />

          <Textarea placeholder="Observações" />
          <Section title="Links Úteis">
            <NoteItem value="Https://rocketseat.com"/>
            <NoteItem isNew placeholder="Novo link"/>
          </Section>
          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem value="react"/>
              <NoteItem isNew placeholder="Novo marcador"/>
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}