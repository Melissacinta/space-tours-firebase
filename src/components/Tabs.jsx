import { useState } from 'react';

const Tabs = ({ txt = '', DS, array }) => {
  const [ariaSelected, setAriaSelected] = useState(false);

  const toggleAria = (item, self, idx) => {
    item === self[idx] ? setAriaSelected(true) : setAriaSelected(false);
  };

  return (
    <div className="tabs flow">
      <div className={`ff-sans-cond flex underline-indicators`}>
        {array?.map((item, idx, self) => {
          return (
            <button
              key={idx + 1}
              role="tab"
              aria-selected={ariaSelected}
              onClick={() => toggleAria(item, self, idx)}
              className={`${txt}${onmouseover ? ' hovered' : ''} btn btn-tab`}
            >
              {item}
            </button>
          );
        })}
      </div>
      {DS && (
        <p>
          <span className="text-accent">Tabs (Active, Hover & Idle)</span>{' '}
        </p>
      )}
    </div>
  );
};

export default Tabs;

// const Tabs = ({ txt = '' }) => {
//   return (
//     <div className="tabs flow">
//       <div className={`ff-sans-cond flex underline-indicators`}>
//         <button role="tab" aria-selected="true" className={`${txt} btn btn-tab`}>Moon</button>
//         <button role="tab" aria-selected="false" className={`${txt} hovered btn btn-tab`}>Mars</button>
//         <button role="tab" aria-selected="false" className={`${txt} btn btn-tab`}>Europa</button>
//       </div>
//       <p>
//         <span className="text-accent">Tabs(Active, Hover & Idle)</span>
//       </p>
//     </div>
//   );
// };

// export default Tabs;
