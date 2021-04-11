import React from 'react'
import { Dropdown } from '@fluentui/react-northstar'
import { Input } from '@fluentui/react-northstar'
import {SearchIcon} from '@fluentui/react-icons-northstar'
import '.././styles/WidgetBar.css'

const WidgetNavBar = () => {
    const getA11ySelectionMessage = {
        onAdd: item => `${item} selected. Press left or right arrow keys to navigate selected items.`,
        onRemove: item => `${item} has been removed.`,
      }
    return(
        <div className="Widget-Bar">
            <Input class="input" placeholder="Search..." />
            <Dropdown
                class="dropdown"
                multiple
                placeholder="Topics"
                getA11ySelectionMessage={getA11ySelectionMessage}
                noResultsMessage="We couldn't find any matches."
                a11ySelectedItemsMessage="Press Delete or Backspace to remove"
            />
            <Dropdown
                class="dropdown"
                multiple
                placeholder="Provider"
                getA11ySelectionMessage={getA11ySelectionMessage}
                noResultsMessage="We couldn't find any matches."
                a11ySelectedItemsMessage="Press Delete or Backspace to remove"
            />
            <Dropdown
                class="dropdown"
                multiple
                placeholder="Duration"
                getA11ySelectionMessage={getA11ySelectionMessage}
                noResultsMessage="We couldn't find any matches."
                a11ySelectedItemsMessage="Press Delete or Backspace to remove"
            />
            <Dropdown
                class="dropdown"
                multiple
                placeholder="Format"
                getA11ySelectionMessage={getA11ySelectionMessage}
                noResultsMessage="We couldn't find any matches."
                a11ySelectedItemsMessage="Press Delete or Backspace to remove"
            />
            <SearchIcon />
            </div>
    )
    }


export default WidgetNavBar;