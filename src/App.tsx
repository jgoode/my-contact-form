import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <Label htmlFor="name" />
                Name
                <Input id="name" name="name" />
                <Label htmlFor="email" />
                Email
                <Input id="email" name="email" />
                <Label htmlFor="message" />
                Message
                <Input id="message" name="message" />
                <SubmitButton>Submit</SubmitButton>
            </form>
        </div>
    );
}

export default App;
