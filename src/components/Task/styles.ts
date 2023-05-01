import { StyleSheet } from 'react-native';

type StylesProps = {
  isComplete: boolean
}

export const styles = (props: StylesProps) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 8,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: props.isComplete ? '#262626' : '#333333',
    borderWidth: 1,
    height: 64,
    marginBottom: 8,    
  },
  text: {
    color: props.isComplete ? '#808080' : '#F2F2F2',
    textDecorationLine: props.isComplete ? 'line-through' : 'none',
    fontSize: 14,
    paddingLeft: 8,
    maxWidth: 300,
    textAlign: 'left'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  }
})