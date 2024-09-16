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
export type MoonStarProps = typeof __propDef.props;
export type MoonStarEvents = typeof __propDef.events;
export type MoonStarSlots = typeof __propDef.slots;
export default class MoonStar extends SvelteComponentTyped<MoonStarProps, MoonStarEvents, MoonStarSlots> {
}
export {};
