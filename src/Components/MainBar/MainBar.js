import { useState } from 'react';
import { AppBar, Button, List, ListItem, Divider, Toolbar } from 'react95';

import * as S from './MainBarStyles';

const MainBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={ './logo.png' }
              alt='react95 logo'
              style={{ height: '20px', marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <List
              style={{
                position: 'absolute',
                left: '0',
                top: '100%'
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem>
                <span role='img' aria-label='👨‍💻'>
                  👨‍💻
                </span>
                Profile
              </ListItem>
              <ListItem>
                <span role='img' aria-label='📁'>
                  📁
                </span>
                Categories
              </ListItem>
              {/* <ListItem>
                <span role='img' aria-label='📁'>
                  🏢
                </span>
                Categories
              </ListItem> */}
              <Divider />
              <ListItem>
                <span role='img' aria-label='🔙'>
                  🔙
                </span>
                Logout
              </ListItem>
            </List>
          )}
        </div>

        <S.Title>SMOK<span>95</span><small>v0.1.1</small></S.Title>
      </Toolbar>
    </AppBar>
  );
};

export default MainBar;

