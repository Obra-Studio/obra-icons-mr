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
export type LanguageProps = typeof __propDef.props;
export type LanguageEvents = typeof __propDef.events;
export type LanguageSlots = typeof __propDef.slots;
export default class Language extends SvelteComponentTyped<LanguageProps, LanguageEvents, LanguageSlots> {
}
export {};
