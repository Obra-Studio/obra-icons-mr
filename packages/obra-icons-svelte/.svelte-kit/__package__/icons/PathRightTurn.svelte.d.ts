import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PathRightTurnProps = typeof __propDef.props;
export type PathRightTurnEvents = typeof __propDef.events;
export type PathRightTurnSlots = typeof __propDef.slots;
export default class PathRightTurn extends SvelteComponentTyped<PathRightTurnProps, PathRightTurnEvents, PathRightTurnSlots> {
}
export {};
