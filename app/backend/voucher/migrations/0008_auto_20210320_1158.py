# Generated by Django 3.1.2 on 2021-03-20 03:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('voucher', '0007_auto_20210318_1128'),
    ]

    operations = [
        migrations.AlterField(
            model_name='voucher',
            name='code_list',
            field=models.FileField(blank=True, null=True, upload_to='codes'),
        ),
    ]
