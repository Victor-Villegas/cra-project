import React from 'react';

const Hobbies = (props) => {
  return (
    <>
      {props.showHobbies ? (
        <>
          <h3>I have {props.count(props.hobbies)} {props.count(props.hobbies) === 1 ? 'Hobby' : 'Hobbies'}:</h3>

          <ul className={'hobbies'}>
            {props.hobbies.map(hobby => (
              <>
                {hobby.isActive &&
                <>
                  <li>{hobby.name}:</li>
                  <p>{hobby.description}</p>
                </>
                }
              </>
            ))}
          </ul>
        </>
      ) : (
        <h3>Hobbies not allowed</h3>
      )}
    </>
  );
};

export default Hobbies;
