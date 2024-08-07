import { Pipe, PipeTransform } from '@angular/core';
import { CategoryType } from '../task';

@Pipe({
  name: 'categoryEmoji'
})
export class CategoryEmojiPipe implements PipeTransform {

  transform(category: CategoryType | string): string | undefined {
    let emoji: string | undefined;
    switch(category) {
      case 'shopping':
        emoji = "🛍️";
        break;
      case 'health':
        emoji = "💊";
        break;
      case 'work':
        emoji = "💼";
        break;
      case 'bills':
        emoji = "💸";
        break;
      case 'cleaning':
        emoji = "🧼";
        break;
      case 'other':
        emoji = "🤷‍♀️";
        break;
      case 'food':
        emoji = "🍔";
        break;
      case 'exercise':
        emoji = "🏋️‍♂️";
        break;
      case 'entertainment':
        emoji = "🎬";
        break;
      case 'education':
        emoji = "📚";
        break;
      case 'travel':
        emoji = "✈️";
        break;
      case 'social':
        emoji = "👥";
        break;
      case 'finance':
        emoji = "💰";
        break;
      case 'home':
        emoji = "🏠";
        break;
      case 'pets':
        emoji = "🐶";
        break;
      default:
        emoji = undefined;
        break;
    }
    return emoji === undefined ? undefined : emoji;
  }

}
