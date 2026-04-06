import './index.scss';

const Masthead = () => {
  const links = [{
    label: 'About',
    id: 'about',
  }, {
    label: 'Work',
    id: 'about',
  }, {
    label: 'Things I\'ve Built',
    id: 'about',
  }];

  const onClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth', 
    });
  };

  return (
    <div className='masthead'>
      {links.map(l => (
        <div
          className='masthead-link'
          key={l.label}
          onClick={() => onClick(l.id)}
        >
          {l.label}
        </div>
      ))}
    </div>
  );
};

export default Masthead;