import dynamic from 'next/dynamic'

const MyStageNoSSR = dynamic(() => import('./components/MyStage'), {
  ssr: false
});

const Page = () => (
  <>
    <MyStageNoSSR/>
  </>
)

export default Page;
