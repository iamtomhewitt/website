import './index.scss';

const Masthead = () => {
  const links = ['About', 'Work', 'Things I\'ve Built'];

  const onClick = () => {
    console.log('todo');
  };

  return (
    <div className='masthead'>
      {links.map(l => (
        <div
          className='masthead-link'
          key={l}
          onClick={onClick}
        >
          {l}
        </div>
      ))}
    </div>
  );
};

export default Masthead;