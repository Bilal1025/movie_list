import './App.css';
import 'antd/dist/antd.css';
import { Table } from "antd";
import { useEffect, useState } from "react";

function App() {
  const [ dataSource, setDataSource ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/movies')
      .then(res => res.json())
      .then(
        (result) => {
          setDataSource(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Expert Rating',
      dataIndex: 'expert_rating',
      key: 'expert_rating',
    },
  ];

  return (
    <div className="App">
      <Table dataSource={ dataSource } columns={ columns }/>;
    </div>
  );
}

export default App;
