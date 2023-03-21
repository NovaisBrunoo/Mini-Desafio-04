import './style.css';
import Headers from '../../components/headers'
import CreateTable from '../../components/CreateTable'
import BasicButtons from '../../components/BasicButtons';

export default function Main() {
  return (
    <div className='container'>
      <Headers />
      <div className='btn-add'>
        <BasicButtons />
      </div>
      <CreateTable />
    </div>
  );
}