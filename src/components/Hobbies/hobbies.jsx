function Hobbies() {
  return (
    <>
      <div
        id='dev-hobby'
        className='content'>
        <div
          id='hobby-title'
          className='title is-4'>
          Some Other Interests
        </div>

        <div className='block'>
          <p>
            Outside of the technical realm, I am drawn to nature
            and exploration, and I find solace in the outdoors.
            It helps me appreciate things. I love it. I take
            moments to watch the clouds drifting by, listen to
            the sounds around me, or to spend a few minutes
            outside to watch the sunrise.
          </p>

          <br />
        </div>

        {/* Hobbies List*/}
        <div id='hobby-list'>
          <p className='title is-5'>
            Here are some of my hobbies
          </p>

          <p>Hiking</p>
          <p>Disc Golfing</p>
          <p>Woodworking and Building</p>
          <p>Exploring new and revisiting previous places</p>
          <p>Reading</p>
          <p>Most importantly, spending time with my family</p>
        </div>
      </div>
    </>
  );
}

export default Hobbies;

