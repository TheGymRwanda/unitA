import { PROJECT } from '/data';
import Wrapper from '/components/layouts/Wrapper';
import Projectcard from './Projectcard';
import Title from '/components/ui/Title';

const project = () => {
  return (
    <>
      <Wrapper>
        <div className='pb-2.5 mt-11.25 md:mt-12 xl:mt-34.5 md:pb-6 xl:pb-24'>
          <Title>Our Work</Title>
        </div>
        <div className="xl:-mx-20 -1.xl:-mx-11.5">
          {PROJECT.map((element, index) => (
            <Projectcard {...element} key={index} />
          ))}
        </div>
      </Wrapper>
    </>
  );
};
export default project;
