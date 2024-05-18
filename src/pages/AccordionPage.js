import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 'j98cas',
      label: 'Can i use react on project?',
      content: 'Yes you can use react on any project, Yes you can use react on any project,Yes you can use react on any project'
    },
    {
      id: 'ii928',
      label: 'Can i use Javascript on project?',
      content: 'Yes you can use Javascript on any project, Yes you can use Javascript on any project,Yes you can use Javascript on any project'
    },
    {
      id: '90kpios',
      label: 'Can i use CSS on project?',
      content: 'Yes you can use CSS on any project, Yes you can use CSS on any project,Yes you can use CSS on any project'
    }
  ]
  return <Accordion items={items}/>
}

export default AccordionPage;