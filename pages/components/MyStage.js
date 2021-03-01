import { Text, Container, Stage } from '@inlet/react-pixi'
import Rectangle from './Rectangle'
import Bunny from './Bunny'

const Page = () => (
  <Stage width={300} height={300} options={{ transparent: true }}>
    <Text text="Hello World" x={100} y={100} rotation={10
    }/>
    <Container x={150} y={150}>
      <Bunny />
    </Container>
  </Stage>
)

export default Page;