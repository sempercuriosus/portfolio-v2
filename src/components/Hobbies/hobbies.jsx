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
            Outside of the technical realm, I am drawn to nature, and I find
            solace in the outdoors. It helps me appreciate things. When I take
            moments to watch the clouds drifting by, listen to the symphony of
            sounds put on by all the inhabitants, or to spend a few minutes
            outside to watch the sunrise. I love it.
          </p>
        </div>

        {/* Hobbies List*/}
        <div id='hobby-list'>
          <p>Hiking</p>
          <p>Disc Golfing</p>
          <p>Woodworking and Building</p>
          <p>Exploring new-to-me places and revisiting previous places</p>
          <p>Reading</p>
          <p>Most importantly, spending time with my family</p>
        </div>
      </div>
    </>
  );
}

export default Hobbies;

