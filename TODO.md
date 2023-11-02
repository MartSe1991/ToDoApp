- Easy: Empty list component (Clipboard icon)
- Easy: Automatically close the modal once a new list or element is added
- Medium: Set Menu component to work like a BurgerMenu (use LinkedIn menu as a reference). For this you will need:

  - a state in you App component to manage the menu visibility
  - a button on the ActiveList component to toggle the menu visibility. This button is only visible on mobile
  - a way to dismiss the menu. Either a close button or even better, clicking the area of the screen that is outside of the menu
  - when you open the page, the menu should be hidden by default

- Medium-Hard: Ability to modify existing entries

  DONE - every editable element must have a 'edit' button (a little pencil)
  DONE - Move Modal and ModalWrapper into the UI folder
  DONE - Edit Modal existing prop names and methods so they are agnostic about the parent component

  - Add new props to the Modal component so it can be repurposed:
    DONE - modal title
    - button label
    - initial value (must be "" when adding a new element, while it should show the current value of an element while editing it )
  - create a new EditElemModal component, and use the updated Modal component to show an 'Edit Modal'
  - clicking on the edit button on each element should show the "Edit modal", both on Menu and Active list
  - TO BE CONTINUED ====>1

- Easy: Component refactoring
- Extra: add aliases!
