import styles from './index.css';
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.normal}>
     <h1>Page Index</h1>
     <Link to="/users/1">go to /users/1</Link>
     <br/>
     <Link to="/users">go to /users</Link>
    </div>
  );
}
