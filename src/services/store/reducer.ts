import {
    AddNavItem,
    ClassAdded,
    ClassesLoaded,
    ClassUpdated,
    FilesAdded,
    FilesDeleted,
    FilesLoaded,
    LessonAdded,
    LessonsLoaded,
    RemoveAllNavItems,
    RemoveNavItem,
    StudentAdded,
    StudentDeleted,
    StudentsLoaded,
    StudentUpdated,
} from './actions'
import {
    processClassAdded,
    processClassesLoaded,
    processClassUpdated,
} from './reducers/Classes.reducers'
import {
    processFilesAdded,
    processFilesDeleted,
    processFilesLoaded,
} from './reducers/Files.reducers'
import {
    processLessonAdded,
    processLessonsLoaded,
} from './reducers/Lessons.reducers'
import {
    processAddNavItem,
    processRemoveAllNavItems,
    processRemoveNavItem,
} from './reducers/NavItems.reducers'
import {
    processStudentAdded,
    processStudentDeleted,
    processStudentsLoaded,
    processStudentUpdated,
} from './reducers/Students.reducers'
import { initialState, State } from './state'

export const reducer = (state: State = initialState, action: any) => {
    const payload = action.payload

    switch (action.type) {
        case LessonsLoaded.type:
            return processLessonsLoaded(state, payload)

        case LessonAdded.type:
            return processLessonAdded(state, payload)

        case FilesLoaded.type:
            return processFilesLoaded(state, payload)

        case FilesAdded.type:
            return processFilesAdded(state, payload)

        case FilesDeleted.type:
            return processFilesDeleted(state, payload)

        case ClassesLoaded.type:
            return processClassesLoaded(state, payload)

        case ClassAdded.type:
            return processClassAdded(state, payload)

        case ClassUpdated.type:
            return processClassUpdated(state, payload)

        case StudentsLoaded.type:
            return processStudentsLoaded(state, payload)

        case StudentAdded.type:
            return processStudentAdded(state, payload)

        case StudentUpdated.type:
            return processStudentUpdated(state, payload)

        case StudentDeleted.type:
            return processStudentDeleted(state, payload)

        case AddNavItem.type:
            return processAddNavItem(state, action)

        case RemoveNavItem.type:
            return processRemoveNavItem(state, action)

        case RemoveAllNavItems.type:
            return processRemoveAllNavItems(state)
    }

    return state
}
