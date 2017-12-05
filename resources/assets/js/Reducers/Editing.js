const defaults = {editing:false, showNewPostDialog:false, saving: false, title:'', content:''};

const editing = (state = defaults, action) => {
    switch (action.type) {
        case 'EDITING_NEW_POST':
            return Object.assign({}, defaults, {editing:true, showNewPostDialog:true});
        case 'EDITING_CANCEL':
            return defaults;
        case 'EDITING_TITLE_CHANGE':
            return Object.assign({}, state, {title: action.value});
        case 'EDITING_CONTENT_CHANGE':
            return Object.assign({}, state, {content: action.value});
        case 'EDITING_SAVING':
            return Object.assign({}, defaults, {saving: true});
        default:
            return state;
    }
}

export default editing
