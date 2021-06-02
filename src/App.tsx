import React, { useState, useEffect, useCallback } from 'react';
import Header from './Files/Header'
import './App.css';

interface Layout {
  headerTitle: string;
  subTitle: string;
  pages: {
    firstPage: {
      title: string | undefined;
    }
  }
}

const App = () => {
  const [layout, setLayout] = useState<Layout | null>(null);

  const onClick = useCallback(() => {
    alert("Why you clicking on my name, huh?");

    setLayout({
      headerTitle: "Stop Clicking My Name",
      subTitle: "MocaCDeveloper - Rust, C and Go developer",
      pages: {
        firstPage: {
          title: layout?.pages.firstPage.title // same
        }
      }
    })
  }, [])

  useEffect(() => {
    fetch("/layout.json").then(
      resp => resp.json()
    ).then(data => {
      setLayout(data);
    })
  }, [])

  return (
    <div className="App">
      {/* Header */}
      <Header title={layout?.headerTitle} subTitle={layout?.subTitle} onClick={onClick} />

      {/* Welcome Page */}

      {/* About Me Page */}

      {/* My project */}

      {/* Current Projects */}

      {/* Collab with me */}
    </div>
  );
}

export default App;