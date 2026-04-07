import './index.scss';

const Work = () => {
  const items = [{
    company: 'William Hill',
    jobTitle: 'Principal Developer',
    startDate: 'November 2022',
    text: 'Principal Developer working across multiple teams. Working with Java, React / Javascript, Python.',
  }, {
    company: 'William Hill',
    jobTitle: 'Developer',
    startDate: 'July 2019',
    text: 'Developer on betting shop self service terminals software. Working with mainly Java, Javascript and React. Developing my front end skills whilst writing new features and fixing issues across the entire terminal system.',
  }, {
    company: 'CGI',
    jobTitle: 'Graduate Developer',
    startDate: 'Aug 2017',
    text: 'Developer on a Defence sector project. Took on the responsibility of customer relationship subsystem team lead, working on everything from code, to builds, deployments, releases and live support, both backend and frontend. Helped develop a reporting tool to produce adhoc pdf reports for the client, which interface with the subsystem. Used a variety of tools and software such as Java, SQL, JSP, Perl, Hibernate, Visual Basic, Remedy BMC, Crystal Reports.',
  }];

  return (
    <div className='work' id='work'>
      <h2>Work</h2>

      <div className='work-grid'>
        {items.map((item, i) => (
          <div
            className='work-item'
            key={i}
            onClick={() => window.open('https://www.linkedin.com/in/thomas-hewitt-ab7724a8/', '_blank')}
          >
            <div className='work-item-title'>{item.jobTitle}</div>

            <div className='work-item-subtitle'>
              <span>{item.company} - </span>

              <span>{item.startDate}</span>
            </div>

            <div className='work-item-text'>{item.text}</div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Work;