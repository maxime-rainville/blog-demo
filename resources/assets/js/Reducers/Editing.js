const editing = (state = {editing:false, showNewPostDialog:false}, action) => {
    switch (action.type) {
        case 'EDITING_NEW_POST':
            return {editing:true, showNewPostDialog:true};
        case 'EDITING_CANCEL':
            return {editing:false, showNewPostDialog:false};
        default:
            return state;
    }
}

export default editing
