import useLocalStorage from '../../hooks/useLocalStorage';
import styles from './SignupForm.module.css';

// стислий (оптимізований ) опис роботи на ХУКАХ

// const useLocalStorage = (key, defaultValue) => {
//   const { state, setState } = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

export default function SignupForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  //Повний опис прероблення на ХУКИ:

  // export default function SignupForm() {
  //   const [email, setEmail] = useState(() => {
  //     return JSON.parse(window.localStorage.getItem('email')) ?? '';
  //   });
  //   const [password, setPassword] = useState(() => {
  //     return JSON.parse(window.localStorage.getItem('password')) ?? '';
  //   });

  //   const handleChange = event => {
  //     const { name, value } = event.target;
  //     switch (name) {
  //       case 'email':
  //         setEmail(value);
  //         break;
  //       case 'password':
  //         setPassword(value);
  //         break;
  //       default:
  //         return;
  //     }
  //   };

  //   useEffect(() => {
  //     window.localStorage.setItem('email', JSON.stringify(email));
  //   }, [email]);

  //   useEffect(() => {
  //     window.localStorage.setItem('password', JSON.stringify(password));
  //   }, [password]);

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

// робота з классами:

// class SignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

//         <label className={styles.label}>
//           <span>Пароль</span>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }
