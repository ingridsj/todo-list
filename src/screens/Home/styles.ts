import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    backgroundColor: '#0D0D0D',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 32, 
    width: 110,
  },
  form: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: -30,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 54,
    borderRadius: 6,
    marginRight: 4,
    fontSize: 16,
    padding: 16,
    color: '#F2F2F2',
  },
  button: {
    backgroundColor: '#1E6F9F',
    height: 52,
    width: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  }
})