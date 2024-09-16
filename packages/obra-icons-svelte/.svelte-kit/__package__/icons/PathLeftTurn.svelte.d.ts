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
export type PathLeftTurnProps = typeof __propDef.props;
export type PathLeftTurnEvents = typeof __propDef.events;
export type PathLeftTurnSlots = typeof __propDef.slots;
export default class PathLeftTurn extends SvelteComponentTyped<PathLeftTurnProps, PathLeftTurnEvents, PathLeftTurnSlots> {
}
export {};
