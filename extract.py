import zipfile
import xml.etree.ElementTree as ET
import sys

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            text_blocks = []
            for para in tree.findall('.//w:p', ns):
                para_text = []
                for run in para.findall('.//w:t', ns):
                    if run.text:
                        para_text.append(run.text)
                if para_text:
                    text_blocks.append(''.join(para_text))
            
            return '\n'.join(text_blocks)
    except Exception as e:
        return str(e)

print(extract_text_from_docx(sys.argv[1]))
