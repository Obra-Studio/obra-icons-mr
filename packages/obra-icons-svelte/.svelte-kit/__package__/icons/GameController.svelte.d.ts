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
export type GameControllerProps = typeof __propDef.props;
export type GameControllerEvents = typeof __propDef.events;
export type GameControllerSlots = typeof __propDef.slots;
export default class GameController extends SvelteComponentTyped<GameControllerProps, GameControllerEvents, GameControllerSlots> {
}
export {};
