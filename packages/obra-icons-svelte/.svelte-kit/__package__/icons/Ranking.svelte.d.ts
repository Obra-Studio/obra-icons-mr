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
export type RankingProps = typeof __propDef.props;
export type RankingEvents = typeof __propDef.events;
export type RankingSlots = typeof __propDef.slots;
export default class Ranking extends SvelteComponentTyped<RankingProps, RankingEvents, RankingSlots> {
}
export {};
