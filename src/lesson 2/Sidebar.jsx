import React from 'react';

const Sidebar = () => {
  return <div className='sidebar'>
      <form action="#">
          <label htmlFor="">Имя</label>
          <input type="text" name="name" id="name" />
          <br />
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" />
          <br />
          <button className='form-button' type="submit">Отправить</button>
      </form>
  </div>;
};

export default Sidebar;
