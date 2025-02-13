// Link to Resume (changes based on version)
import { useEffect } from 'react';
import SectionTitle from '../ui/sectionTitle';
import PageTitle from '../ui/pageTitle';
import ListContainer from '../ui/listContainer';
import ResumePath from '../../assets/resume/2025_eric_hulse_resume.pdf';
import extractFilename from '../../utils/extractFilename';
import experienceList from '../../utils/experienceList';

let resumeFilename = extractFilename(ResumePath);

function Resume() {
  document.title = 'Resume | Third Coast 🦡';

  // Scrolling to the top, after render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id='resume'>
        <PageTitle
          id='resume-title'
          title='Resume'
        />
        <div className='is-size-5 block'>
          <div
            id='resume-download'
            className='block'
            style={{ padding: '3rem 0' }}>
            {/*  */}

            <SectionTitle
              id='resume-title'
              title='Resume'
            />

            <div className='block'>
              <p>
                My resume is available as downloadable PDF and
                can be found below.
              </p>
            </div>

            {/* Resume Link */}
            <div className='block'>
              <a
                id='resume-link'
                href={ResumePath}
                download={resumeFilename}
                target='_blank'
                rel='noopener noreferrer'>
                <button className='button is-info'>
                  Download My Resume
                </button>
              </a>
            </div>
          </div>

          {/* Tech Stack List */}

          <div
            className='block'
            style={{ padding: '1rem 0' }}>
            <h2
              id='experience-title'
              className='title is-3'>
              Tech Stack
            </h2>

            <p className='block'>
              Here is what I have experience in, there is no
              particular order, but I am always willing to add to
              it.{' '}
            </p>

            <p className='block'>
              My current focus is within the{' '}
              <strong>
                <a
                  href='https://wikitia.com/wiki/MERN_(solution_stack)'
                  target='blank'>
                  {' '}
                  M.E.R.N Stack
                </a>
              </strong>{' '}
              coming from WFA, using C# as my primary language,
              working with both Dotnet Framework and Dotnet Core.
            </p>
          </div>

          <div className='content block'>
            {/* Experience List */}

            <ListContainer
              title='Technologies'
              list={experienceList.technologies}
            />

            {/*  */}
            <ListContainer
              title='Languages and Frameworks'
              list={experienceList.languagesAndFrameworks}
            />

            <ListContainer
              title='Other Projects'
              list={experienceList.other}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;

