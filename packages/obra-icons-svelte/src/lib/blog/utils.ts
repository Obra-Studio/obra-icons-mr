import { format } from 'date-fns';

export function formatDate(date: Date) {
	return format(date, 'MMMM do, yyyy');
}

export function isPostPublished(post: { date: string | number | Date }): boolean {
    const currentDate = new Date();
    const publishDate = new Date(post.date);
    return publishDate <= currentDate;
}