import _ from './commands';
export const styles = (type) => {
    let styled = '';
    switch (type.toUpperCase()) {
        case 'B':
            styled += _.TEXT_FORMAT.TXT_BOLD_ON;
            styled += _.TEXT_FORMAT.TXT_ITALIC_OFF;
            styled += _.TEXT_FORMAT.TXT_UNDERL_OFF;
            break;
        case 'I':
            styled += _.TEXT_FORMAT.TXT_BOLD_OFF;
            styled += _.TEXT_FORMAT.TXT_ITALIC_ON;
            styled += _.TEXT_FORMAT.TXT_UNDERL_OFF;
            break;
        case 'U':
            styled += _.TEXT_FORMAT.TXT_BOLD_OFF;
            styled += _.TEXT_FORMAT.TXT_ITALIC_OFF;
            styled += _.TEXT_FORMAT.TXT_UNDERL_ON;
            break;
        case 'U2':
            styled += _.TEXT_FORMAT.TXT_BOLD_OFF;
            styled += _.TEXT_FORMAT.TXT_ITALIC_OFF;
            styled += _.TEXT_FORMAT.TXT_UNDERL2_ON;
            break;
        case 'BI':
            styled += _.TEXT_FORMAT.TXT_BOLD_ON;
            styled += _.TEXT_FORMAT.TXT_ITALIC_ON;
            styled += _.TEXT_FORMAT.TXT_UNDERL_OFF;
            break;
        case 'BIU':
            styled += _.TEXT_FORMAT.TXT_BOLD_ON;
            styled += _.TEXT_FORMAT.TXT_ITALIC_ON;
            styled += _.TEXT_FORMAT.TXT_UNDERL_ON;
            break;
        case 'BIU2':
            styled += _.TEXT_FORMAT.TXT_BOLD_ON;
            styled += _.TEXT_FORMAT.TXT_ITALIC_ON;
            styled += _.TEXT_FORMAT.TXT_UNDERL2_ON;
            break;
        case 'BU':
            styled += _.TEXT_FORMAT.TXT_BOLD_ON;
            styled += _.TEXT_FORMAT.TXT_ITALIC_OFF;
            styled += _.TEXT_FORMAT.TXT_UNDERL_ON;
            break;
        case 'BU2':
            styled += _.TEXT_FORMAT.TXT_BOLD_ON;
            styled += _.TEXT_FORMAT.TXT_ITALIC_OFF;
            styled += _.TEXT_FORMAT.TXT_UNDERL2_ON;
            break;
        case 'IU':
            styled += _.TEXT_FORMAT.TXT_BOLD_OFF;
            styled += _.TEXT_FORMAT.TXT_ITALIC_ON;
            styled += _.TEXT_FORMAT.TXT_UNDERL_ON;
            break;
        case 'IU2':
            styled += _.TEXT_FORMAT.TXT_BOLD_OFF;
            styled += _.TEXT_FORMAT.TXT_ITALIC_ON;
            styled += _.TEXT_FORMAT.TXT_UNDERL2_ON;
            break;
        case 'NORMAL':
        default:
            styled += _.TEXT_FORMAT.TXT_BOLD_OFF;
            styled += _.TEXT_FORMAT.TXT_ITALIC_OFF;
            styled += _.TEXT_FORMAT.TXT_UNDERL_OFF;
            break;
    }
    return styled;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdmgtZXNjcG9zL3NyYy9saWIvZW5jb2RlL3N0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFDM0IsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUU7SUFDbkMsSUFBSSxNQUFNLEdBQVcsRUFBRSxDQUFDO0lBQ3hCLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQzNCLEtBQUssR0FBRztZQUNQLE1BQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUNwQyxNQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDdkMsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQ3ZDLE1BQU07UUFDUCxLQUFLLEdBQUc7WUFDUCxNQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7WUFDckMsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQ3RDLE1BQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUN2QyxNQUFNO1FBQ1AsS0FBSyxHQUFHO1lBQ1AsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1lBQ3JDLE1BQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUN2QyxNQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDdEMsTUFBTTtRQUNQLEtBQUssSUFBSTtZQUNSLE1BQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztZQUNyQyxNQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDdkMsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQ3ZDLE1BQU07UUFFUCxLQUFLLElBQUk7WUFDUixNQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDcEMsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQ3RDLE1BQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUN2QyxNQUFNO1FBQ1AsS0FBSyxLQUFLO1lBQ1QsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUN0QyxNQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDdEMsTUFBTTtRQUNQLEtBQUssTUFBTTtZQUNWLE1BQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUNwQyxNQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDdEMsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQ3ZDLE1BQU07UUFDUCxLQUFLLElBQUk7WUFDUixNQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDcEMsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUN0QyxNQUFNO1FBQ1AsS0FBSyxLQUFLO1lBQ1QsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUN2QyxNQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDdkMsTUFBTTtRQUNQLEtBQUssSUFBSTtZQUNSLE1BQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztZQUNyQyxNQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDdEMsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQ3RDLE1BQU07UUFDUCxLQUFLLEtBQUs7WUFDVCxNQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7WUFDckMsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQ3RDLE1BQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUN2QyxNQUFNO1FBRVAsS0FBSyxRQUFRLENBQUM7UUFDZDtZQUNDLE1BQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztZQUNyQyxNQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDdkMsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQ3ZDLE1BQU07S0FDUDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnLi9jb21tYW5kcyc7XG5leHBvcnQgY29uc3Qgc3R5bGVzID0gKHR5cGU6IGFueSkgPT4ge1xuXHRsZXQgc3R5bGVkOiBzdHJpbmcgPSAnJztcblx0c3dpdGNoICh0eXBlLnRvVXBwZXJDYXNlKCkpIHtcblx0XHRjYXNlICdCJzpcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9CT0xEX09OO1xuXHRcdFx0c3R5bGVkICs9IF8uVEVYVF9GT1JNQVQuVFhUX0lUQUxJQ19PRkY7XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfVU5ERVJMX09GRjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ0knOlxuXHRcdFx0c3R5bGVkICs9IF8uVEVYVF9GT1JNQVQuVFhUX0JPTERfT0ZGO1xuXHRcdFx0c3R5bGVkICs9IF8uVEVYVF9GT1JNQVQuVFhUX0lUQUxJQ19PTjtcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9VTkRFUkxfT0ZGO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnVSc6XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfQk9MRF9PRkY7XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfSVRBTElDX09GRjtcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9VTkRFUkxfT047XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdVMic6XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfQk9MRF9PRkY7XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfSVRBTElDX09GRjtcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9VTkRFUkwyX09OO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlICdCSSc6XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfQk9MRF9PTjtcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9JVEFMSUNfT047XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfVU5ERVJMX09GRjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ0JJVSc6XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfQk9MRF9PTjtcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9JVEFMSUNfT047XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfVU5ERVJMX09OO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnQklVMic6XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfQk9MRF9PTjtcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9JVEFMSUNfT047XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfVU5ERVJMMl9PTjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ0JVJzpcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9CT0xEX09OO1xuXHRcdFx0c3R5bGVkICs9IF8uVEVYVF9GT1JNQVQuVFhUX0lUQUxJQ19PRkY7XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfVU5ERVJMX09OO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnQlUyJzpcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9CT0xEX09OO1xuXHRcdFx0c3R5bGVkICs9IF8uVEVYVF9GT1JNQVQuVFhUX0lUQUxJQ19PRkY7XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfVU5ERVJMMl9PTjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ0lVJzpcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9CT0xEX09GRjtcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9JVEFMSUNfT047XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfVU5ERVJMX09OO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnSVUyJzpcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9CT0xEX09GRjtcblx0XHRcdHN0eWxlZCArPSBfLlRFWFRfRk9STUFULlRYVF9JVEFMSUNfT047XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfVU5ERVJMMl9PTjtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAnTk9STUFMJzpcblx0XHRkZWZhdWx0OlxuXHRcdFx0c3R5bGVkICs9IF8uVEVYVF9GT1JNQVQuVFhUX0JPTERfT0ZGO1xuXHRcdFx0c3R5bGVkICs9IF8uVEVYVF9GT1JNQVQuVFhUX0lUQUxJQ19PRkY7XG5cdFx0XHRzdHlsZWQgKz0gXy5URVhUX0ZPUk1BVC5UWFRfVU5ERVJMX09GRjtcblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiBzdHlsZWQ7XG59O1xuIl19