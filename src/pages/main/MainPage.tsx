import { FC } from 'react';
import { Table1 } from '../../components/table/Table1';

export const MainPage: FC = () => {

  return (
    <div className={'d-flex flex-column gap-5'}>
      <div>
        <div className="mb-4">
          <Table1 />
        </div>
      </div>
      
    </div>
  )
}