import re

# Correct navigation items
correct_nav = '''<nav class="main-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/prompts.html">Prompts</a></li>
                        <li><a href="/gallery.html">The Vault</a></li>
                        <li><a href="/panoramic.html">Panoramic</a></li>
                        <li><a href="/about.html">About</a></li>
                        <li><a href="/contact.html">Contact</a></li>
                    </ul>
                </nav>'''

# Fix about.html
with open('about.html', 'r') as f:
    content = f.read()

# Find and replace the nav section
nav_start = content.find('<nav class="main-nav">')
if nav_start != -1:
    nav_end = content.find('</nav>', nav_start) + 6
    content = content[:nav_start] + correct_nav + content[nav_end:]
    with open('about.html', 'w') as f:
        f.write(content)
    print('✅ Fixed about.html navigation')

# Fix contact.html
with open('contact.html', 'r') as f:
    content = f.read()

nav_start = content.find('<nav class="main-nav">')
if nav_start != -1:
    nav_end = content.find('</nav>', nav_start) + 6
    content = content[:nav_start] + correct_nav + content[nav_end:]
    with open('contact.html', 'w') as f:
        f.write(content)
    print('✅ Fixed contact.html navigation')

# Fix index.html
with open('index.html', 'r') as f:
    content = f.read()

nav_start = content.find('<nav class="main-nav">')
if nav_start != -1:
    nav_end = content.find('</nav>', nav_start) + 6
    content = content[:nav_start] + correct_nav + content[nav_end:]
    with open('index.html', 'w') as f:
        f.write(content)
    print('✅ Fixed index.html navigation')

# Fix prompts.html
with open('prompts.html', 'r') as f:
    content = f.read()

nav_start = content.find('<nav class="main-nav">')
if nav_start != -1:
    nav_end = content.find('</nav>', nav_start) + 6
    content = content[:nav_start] + correct_nav + content[nav_end:]
    with open('prompts.html', 'w') as f:
        f.write(content)
    print('✅ Fixed prompts.html navigation')

print('\n🎉 All navigation fixed!')
