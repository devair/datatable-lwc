import "@lwc/synthetic-shadow";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import BasicApp from "./basic";
import MyDatatableApp from "./myDatatable";
import WithRowNumbersApp from "./withRowNumbers";
import WithRowActionsApp from "./withRowActions";
import WithInlineEditApp from "./withInlineEdit";
import SortingApp from "./sorting";


// A basic data table that fetches data during initialization. Set the server data on the data attribute. Display data based on the data type by defining the columns object.
export const Basic = () => BasicApp;
Basic.storyName = "Basic Data Table";

export const MyDatatable = () => MyDatatableApp;
MyDatatableApp.storyName = "My datatable";

// Specify show-row-number-column to show row numbers in the data table.
//export const WithRowNumbers = () => WithRowNumbersApp;
//WithRowNumbers.storyName = "Data Table with Row Numbers";

// A data table with actions that can be performed on table rows. Use onrowaction to call a handler that defines the actions.
//export const WithRowActions = () => WithRowActionsApp;
//WithRowActions.storyName = "Data Table with Row Actions";

// A data table with inline edit enabled, simulating server requests.
//export const WithInlineEdit = () => WithInlineEditApp;
//WithInlineEdit.storyName = "Data Table with Inline Edit";

// A data table with a column that can be sorted in ascending or descending order.
//export const Sorting = () => SortingApp;
//Sorting.storyName = "Data Table with Sortable Column";
