import { useState } from 'react';
import moment from 'moment/moment';
import { Header } from './Header/Header';
import { ToolBar } from './ToolBar/ToolBar';
import { IdeaForm } from './IdeaForm/IdeaForm';
import { MainCalendar } from './MainCalendar/MainCalendar';

import '../index.css';

export const App = () => {
  const [today, setToday] = useState(moment());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [updateIdea, setUpdateIdea] = useState(null);
  const [nameOfMethod, setNameOfMethod] = useState();
  const [ideas, setIdeas] = useState(
    JSON.parse(localStorage.getItem('ideas')) || []
  );

  moment.updateLocale('en', { week: { dow: 1 } });

  const firstDay = today.clone().startOf('month').startOf('week');

  const openForm = (method, updateIdea) => {
    setNameOfMethod(method);
    setUpdateIdea(
      updateIdea || {
        title: '',
        description: '',
        date: moment().format('x'),
      }
    );
    setIsFormOpen(true);
  };
  const closeForm = () => {
    setIsFormOpen(!isFormOpen);
    setUpdateIdea(null);
  };

  const prevMonth = () => {
    setToday(prev => prev.clone().subtract(1, 'month'));
  };

  const nextMonth = () => {
    setToday(prev => prev.clone().add(1, 'month'));
  };

  const saveIdea = (task, i) => {
    let id = i || moment().format('X');
    let temp = ideas.filter(idea => idea.id !== id);
    setIdeas([...temp, { id, ...task }]);
    localStorage.setItem('ideas', JSON.stringify([...temp, { id, ...task }]));
    closeForm();
  };

  const deleteIdea = id => {
    let temp = ideas.filter(event => event.id !== id);
    setIdeas([...temp]);
    localStorage.setItem('ideas', JSON.stringify([...temp]));
    closeForm();
  };

  const filterMonth = unixDate => setToday(moment(unixDate));

  return (
    <>
      <Header />
      <ToolBar
        filterMonth={filterMonth}
        today={today}
        firstDay={firstDay}
        openForm={openForm}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      {isFormOpen && (
        <IdeaForm
          deleteIdea={deleteIdea}
          saveIdea={saveIdea}
          closeForm={closeForm}
          updateIdea={updateIdea}
          setUpdateIdea={setUpdateIdea}
          nameOfMethod={nameOfMethod}
        />
      )}
      <MainCalendar
        openForm={openForm}
        ideas={ideas}
        today={today}
        firstDay={firstDay}
      />
    </>
  );
};
