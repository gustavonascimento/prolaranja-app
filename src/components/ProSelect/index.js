import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemText from '@material-ui/core/ListItemText'
import InputBase from '@material-ui/core/InputBase'
import { useStyles, customize } from './style'

const SelectInput = customize(InputBase)

const ProSelect = ({ 
  className, 
  options = [], 
  emptyOption = 'Nenhum', 
  title = '', 
  multiple = false,
  onChange = () => {}
}) => {
  const classes = useStyles()
  const initialValue = multiple ? [] : ''
  const [value, setValue] = React.useState(initialValue)

  const handleChange = event => {
    setValue(event.target.value)
    onChange(event.target.value)
  }

  const handleChangeMultiple = (event, index, values) => {
    // console.log('init value:', value)

    console.log(event, index, values)
    
    // const selectedValue = event.target.value[0]
    // console.log(selectedValue)
    // // const currentValues = [ ...value ]
    // // if ( currentValues.indexOf(selectedValue) > -1 ) {
    //   // remove
    // // } else {
    //   // add
    //   // console.log('add selected value: ', selectedValue)
    //   // currentValues.push(selectedValue)
    //   // setValue(currentValues)
    // // }
    // // const { options } = event.target;

    
    // // console.log(options)
    // // const selectedValue = [];
    // // for (let i = 0, l = options.length; i < l; i += 1) {
    // //   if (options[i].selected) {
    // //     selectedValue.push(options[i].value);
    // //   }
    // // }
    // // setValue(selectedValue);

    // const { options } = event.target;
    // const selectedOption = [];
    // for (let i = 0, l = options.length; i < l; i += 1) {
    //   if (options[i].selected) {
    //     selectedOption.push(options[i].value);
    //   }
    // }

    // console.log(selectedOption)
  }

  const findOptionByValue = (value) => {
    console.log(multiple)
    if (multiple) {
      console.log(value)
    } else {
      return options.find((option) => option.value === value)
    }
  }

  // console.log('before render:', value)
  return (
    <FormControl className={className}>
      <Select
        multiple={multiple}
        value={value}
        onChange={multiple ? handleChangeMultiple : handleChange}
        IconComponent={KeyboardArrowDownIcon}
        classes={{
          icon: classes.selectIcon
        }}
        displayEmpty
        renderValue={(value) => {
          if (value) {
            if (multiple) {
              return ''
            } else {
              return findOptionByValue(value).text
            }
          } else {
            return title
          }
        }}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          getContentAnchorEl: null
        }}
        input={<SelectInput />}
      >
        <MenuItem value="" className={classes.selectOption}>
          <em>{emptyOption}</em>
        </MenuItem>
        {options.map((option, index) => {
          return (
            <MenuItem
              key={index}
              value={option.value}
              className={classes.selectOption}
            >
              {multiple && (
                <React.Fragment>
                  {/* <Checkbox checked={value.indexOf(option.value) > -1} /> */}
                  <ListItemText primary={option.text} />
                </React.Fragment>
              )}

              {!multiple && (option.text)}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default ProSelect