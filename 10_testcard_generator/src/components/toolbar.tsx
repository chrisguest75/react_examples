import styles from './toolbar.module.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

export default function ToolBar() {

  function handleClick() {
    console.log("increment like count")
  }

  return (
    <div className={styles.toolbar}>
      <ButtonToolbar>
        <Button variant="primary" onClick={handleClick}>Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </ButtonToolbar>
    </div>
  );
}